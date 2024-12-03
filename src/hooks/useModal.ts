import { useEffect, useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  
  const toggleHandler = () => {
    setIsOpen(prevOpenState => !prevOpenState);
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return {
    isOpen,
    handleOpen,
    handleClose,
    toggleHandler,
  };
}
