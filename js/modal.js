const modalContainer = document.querySelector(".modal-container");

const systemCompClicked = () => {
    if (!modalContainer || !modalContainer.classList) return;

    modalContainer.classList.add("modal-visible");
};

const modalCloseBtnClicked = () => {
    if (!modalContainer || !modalContainer.classList) return;

    modalContainer.classList.remove("modal-visible");
};