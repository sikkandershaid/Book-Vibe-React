// Sweet alert Link
import Swal from 'sweetalert2';

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readlist");

  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else {
    return [];
  }
}

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
  Swal.fire({
    title: "Your book is already attached.",
    icon: "warning",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData)
    localStorage.setItem("readlist", data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your book has been successfully attached.",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

export { addToStoredDB, getStoredBook };