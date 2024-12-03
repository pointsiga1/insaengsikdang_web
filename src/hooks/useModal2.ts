import { useEffect, useState } from 'react';

export default function useModal2() {
  const [modals, setModals] = useState({ isOpen: false, isOpen2: false });

  const handleOpen = (modal: 'isOpen' | 'isOpen2') => {
    setModals(prevState => ({ ...prevState, [modal]: true }));
  };

  const handleClose = (modal: 'isOpen' | 'isOpen2') => {
    setModals(prevState => ({ ...prevState, [modal]: false }));
  };

  const toggleHandler = (modal: 'isOpen' | 'isOpen2') => {
    setModals(prevState => ({ ...prevState, [modal]: !prevState[modal] }));
  };

  useEffect(() => {
    const { isOpen, isOpen2 } = modals;
    document.body.style.overflow = isOpen || isOpen2 ? 'hidden' : 'auto';
  }, [modals]);

  return {
    isOpen: modals.isOpen,
    isOpen2: modals.isOpen2,
    handleOpen,
    handleClose,
    toggleHandler,
  };
}