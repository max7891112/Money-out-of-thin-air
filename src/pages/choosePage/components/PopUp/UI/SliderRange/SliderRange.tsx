import { useState } from 'react';
import style from './sliderRange.module.scss';
import { Box, Slider, Typography } from '@mui/material';

type SliderRangeProps = {
  name: string,
}

export const SliderRange = (props: SliderRangeProps) => {

      function valuetext(value: number) {
        return `${value}°C`;
      }
    
      const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };
    
      const MAX = 120;
      const MIN = 30;
      const marks = [
        {
          value: MIN,
          label: "",
        },
        {
          value: MAX,
          label: "",
        },
      ];
      const [value, setValue] = useState<number[]>([MIN, MAX]);

    return <div className={style.rangeBlock}>
    <p className={style.nameRangeBlock}>{props.name}</p>
    <Box sx={{ width: 257}}>
      <Slider
        getAriaLabel={() => "Buy range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        step={10}
        min={MIN}
        max={MAX}
        sx={{
          '.MuiSlider-thumb': {bgcolor: '#11B14C', width: '10px', height: '10px'},
          height: '1px',
          color: '#fff',
          width: '237px',
          padding: '14px 0 6px 10p',
          margin: '0 0 0 10px'
        }}
        className={style.slider}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          '.MuiTypography-root': { fontSize: '16px'}
        }}
      >
        <Typography variant="body2">{MIN}</Typography>
        <Typography variant="body2">{MAX}</Typography>
      </Box>
    </Box>
  </div>
}