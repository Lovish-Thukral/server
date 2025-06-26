let userdata = [

];


export const findtheusercontroller = (req, res) => {
    const username = req.params.username

    const tempdata = userdata.filter(user => user.username === username)

    if (tempdata.length === 1) {

        res.json({
            status: true,
            username: tempdata[0].username,
            password: tempdata[0].password,
            age: tempdata[0].age,
            height: tempdata[0].height
        })

    } else {
        res.status(404).json({
            status: false,
            username: 'notfound',
            password: null
        })
    }
}

export const updateUserController = (req, res) => {
    const newdata = req.body;
    console.log(newdata);
    userdata = userdata.map((user) =>
        user.username === newdata.username ? { ...user, ...newdata } : user
    );

    console.log("User info updated");
    res.status(200).json({
        Newuserdata:userdata
    });
};

export const deleteuser = (req, res) => {
    const todeluser = req.params.username;
    userdata = userdata.filter((e) => e.username !== todeluser);

    console.log("user deleted");
    res.json({
        newuserdata: userdata
    });
}

export const addnewuser = (req, res) => {
    const newuserdata = req.body;
    userdata.push(newuserdata)
    console.log("user added");
    res.json({
        newuserdata: userdata
    })
} 