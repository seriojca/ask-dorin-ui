export interface ChatProps extends React.ComponentProps<"div"> {}

export default function Chat({ className }: ChatProps) {
  return (
    <div className={className}>
      {/* Side panel  */}
      <div></div>
      {/* Dialog box */}
      <div>{/* Chat  */}</div>
    </div>
  );
}
