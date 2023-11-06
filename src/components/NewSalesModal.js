import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import whiteCrossIcon from "../assets/images/whiteCrossIcon.svg";
import { TextField } from "@mui/material";

const NewSalesModal = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyles">
          <img
            className="crossIconStyle"
            onClick={handleClose}
            src={whiteCrossIcon}
            alt="whiteCrossIcon"
          />
          <Box padding="15px" display="flex" gap="4px" flexDirection="column">
            <Typography fontSize="16px" fontWeight="600">
              Add Sales Invoice
            </Typography>
            <TextField
              type="file"
              sx={{ marginTop: "20px" }}
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewSalesModal;
