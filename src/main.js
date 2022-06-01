document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const query = this.querySelector("#data").value;
    if (!query) return;
    const result = await (await fetch(`/api/${query}`)).json();
    document.querySelector("#age").innerText = result.age;
    document.querySelector("#birthName").innerText = result.birthName;
    document.querySelector("#birthLocation").innerText = result.birthLocation;
});