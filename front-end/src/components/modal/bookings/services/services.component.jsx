import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const ServicesPick = ({ allServices, setBookingInfo, bookingInfo }) => {
  const [services, setServices] = useState([]);
  const [servicesName, setServicesName] = useState([]);
  useEffect(() => {
    if (allServices.length > 0) {
      console.log(allServices);
      setServicesName(allServices);
    }
  }, [allServices]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServices(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    const newServicesArr = allServices.filter((el) =>
      value.includes(el.service)
    );
    setBookingInfo({ ...bookingInfo, services: newServicesArr });
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 300 }}>
        <InputLabel style={{ top: "-8px" }} id="demo-multiple-checkbox-label">
          Services
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={services}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {servicesName.length > 0 &&
            servicesName.map((el) => (
              <MenuItem key={el._id} value={el.service}>
                <Checkbox checked={services.indexOf(el.service) > -1} />
                <ListItemText primary={`${el.service} - $${el.price}`} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
