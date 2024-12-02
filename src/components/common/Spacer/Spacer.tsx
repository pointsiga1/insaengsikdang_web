export interface SpacerProps {
  width?: number;
  height?: number;
}

export default function Spacer({ width, height }: SpacerProps) {
  return width ?
    <div style={{ width }} /> : <div style={{ height }} />;
}
