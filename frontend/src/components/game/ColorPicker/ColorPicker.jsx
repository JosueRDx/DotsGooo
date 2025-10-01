import React from 'react';
import DraggableColorSwatch from './DraggableColorSwatch';
import styles from './ColorPicker.module.css'; // CORRECTO si usas módulos CSS

const ColorPicker = ({ colors, title, isTouchDevice = false, onSelectColor }) => {
  return (
    <div className={styles["color-picker-container"]}>
      {title && <h2>{title}</h2>}
      <div className={styles["color-options"]}>
        {colors.map((colorOpt) => (
          <DraggableColorSwatch
            key={colorOpt.id}
            colorOption={colorOpt}
            isTouchDevice={isTouchDevice}
            onSelect={onSelectColor}
          />
          ))}
      </div>
    </div>
  );
};

export default ColorPicker;
