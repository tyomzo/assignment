(() => {
    window.onload = () => {
        bootstrap();
    };
})();

function bootstrap() {
    let element = document.createElement("h3");
    element.innerText = "Hello. Feel free to change me";
    document.body.appendChild(element);
}