"use client"

import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Test Success") : toast.error("Test error");
  };
  return <Button variant="link" className="underline" onClick={() => handleClick(false)}>Text Toast</Button>;
};

export default Test;
