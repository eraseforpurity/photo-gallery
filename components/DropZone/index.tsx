import React, { DragEvent, useState } from "react";

import styles from "./DropZone.module.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface DropZoneProps extends InputProps {
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
}

export const DropZone = ({ onDragStart, onDrop }: DropZoneProps) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDrop(e);
    setIsDragOver(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleOnDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const classnameForOver = isDragOver ? " " + styles.over : "";

  return (
    <div>
      <div
        onDragStart={onDragStart}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={styles.dropzone + classnameForOver}
      >
        {isDragOver ? (
          <div className={styles.drop}>Drop now</div>
        ) : (
          <div className={styles.textContainer}>Drag photos here</div>
        )}
      </div>
    </div>
  );
};
