function submitInfo() {
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let age = document.querySelector("#age").value;

    console.log(`First Name: ${fname}`);
    console.log(`Last Name: ${lname}`);
    console.log(`Age: ${age}`);

    console.log(typeof fname)
    console.log(typeof lname)
    console.log(typeof age)

    alert(`First Name: ${fname}\n Last Name: ${lname}\n Age: ${age}`);
}