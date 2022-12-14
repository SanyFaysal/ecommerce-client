import { VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react';

const ProductReviewModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle py-10">
        <div className="modal-box py-10">
          <h3 className="font-bold text-lg mb-6 text-center">
            Please share your experience with us
          </h3>

          <FormControl className="w-full  ">
            <InputLabel id="demo-simple-select-label">
              Your Personal Ratings
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Your Personal Ratings"
            >
              <MenuItem value={5}>
                <span className=" font-bold"> 5 </span>
                <KeyboardDoubleArrowRightIcon className="mx-2 text-yellow-500" />{' '}
                Outstanding
              </MenuItem>
              <MenuItem value={4}>
                <span className=" font-bold"> 4 </span>
                <KeyboardDoubleArrowRightIcon className="mx-2 text-yellow-500" />{' '}
                Very Satisfactory
              </MenuItem>
              <MenuItem value={3}>
                <span className=" font-bold"> 3 </span>
                <KeyboardDoubleArrowRightIcon className="mx-2 text-yellow-500" />{' '}
                Satisfactory
              </MenuItem>
              <MenuItem value={2}>
                <span className=" font-bold"> 2 </span>
                <KeyboardDoubleArrowRightIcon className="mx-2 text-yellow-500" />{' '}
                Unsatisfactory
              </MenuItem>
              <MenuItem value={1}>
                <span className=" font-bold"> 1 </span>
                <KeyboardDoubleArrowRightIcon className="mx-2 text-yellow-500" />{' '}
                Poor
              </MenuItem>
            </Select>
          </FormControl>
          <div className="">
            <FormControl fullWidth sx={{ marginTop: '18px' }}>
              <TextField
                id="outlined-basic"
                label="Your Personal Review"
                variant="outlined"
                multiline
                rows={3}
                sx={{ width: '100%' }}
              />
            </FormControl>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-error btn-sm">
              Cancel
            </label>
            <label htmlFor="my-modal-6" className="btn btn-success btn-sm">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviewModal;
