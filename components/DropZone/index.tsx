import React, { DragEvent } from "react";

import styles from "./DropZone.module.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface DropZoneProps extends InputProps {
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
}

export const DropZone = ({
  onDragStart,
  onDragLeave,
  onDrop,
}: DropZoneProps) => {
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDrop(e);
  };

  return (
    <div>
      <div
        onDragStart={onDragStart}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={onDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={styles.dropzone}
      >
        <div className={styles.textContainer}>Drag photos here</div>
      </div>
    </div>
  );
};
