const model = require('./../../models/index')
const role = model.role

exports.controllerAddRole = async(req, res)=> {
    const {name } = req.body
    const data ={
        name : name
    }
    await role.create(data)
    .then(result=> {
        res.json({
            data: data
        })
    }).catch(err=> {
        console.log(err)
    })
}

exports.controllerGetRole = async(req, res)=> {
    await role.findAll({
        attributes: ["name"]
    })
    .then(result=> {
        res.json({
            data: result
        })
    }).catch(err=> {
        console.log(err)
    })
}

exports.controllerGetRoleById = async(request, response)=> {
    await role.findOne({
        where: {
            id: request.params.id
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })
    .then(result=> {
        response.json({
            data: result
        })
    }).catch(err=> {
        console.log(err)
    })
}


exports.controllerUpdateRole= async(req, res)=> {
    const {name} = req.body
    const data ={
        name :name
    }
    await role.update(data, {
        where: {
            id: req.params.id
        }
    })
    .then(result=> {
        res.json({
            data: data
        })
    }).catch(err=> {
        console.log(err)
    })
}

exports.controllerDeleteRole = async(req, res)=> {
    await role.destroy({
        where: {
            id: req.params.id
        }
    })
    // await role.create(data)
    .then(result=> {
        res.json({
            message: "Data was successfully deleted"
        })
    }).catch(err=> {
        console.log(err)
    })
}

// const model  =require('./../../models/index')
// const role = model.role

// module.exports = {

//     // module get (controllerGetRole)
//     // mengambil data id dan nama role dari database 
//     controllerGetRole: async(req, res)=>{

//         // mengambil data dengan function findOne
//         await role.findAll({
//             attributes: ['id', 'name']
//         })
//         .then(result=>{
//             // mengembalikan nilai dalam bentuk JSON
//             res.json({
//                 data: result
//             })
//         })
//         .catch(err=> {
//             // menampilkan error pada console
//             console.log(err)
//         })
//     },

//     // module get id (controllerGetById)
//     // mengambil dara nama dan id dari table role di database berdasarkan id
//     controllerGetRoleById: async (req, res) => {

//         // mengambil id dari parameter id di API
//         let {id} = req.params

//         // mengambil dara dengan function findOne 
//         await role.findOne({
//             // untuk membaca parameter id
//             where: {id: id},
//             attributes:['id', 'name']
//         })
//         .then(result=>{
//             // mengembalikan nilai berupa JSON
//             res.json({
//                 data: result
//             })
//         })
//         .catch(err=> {
//             // menampilkan error pada console
//             console.log(err)
//         })
//     },

//     // module Add Role (controllerAddRole)
//     // berfungsi untuk create data pada table role di database
//     controllerAddRole: async(req, res)=> {

//         // mengambil data dari req body atau data yang di inputkan
//         let {
//             name
//         } = req.body

//         // membuat list yang berisi data json untuk di post pada function create
//         let data = {
//             name : name
//         }

//         // menambahkan data pada table role dengan function create
//         await role.create(data)
//         .then(result => {
//             // mengembalikan nilai dalam bentuk json
//             res.json({
//                 data: data
//             })
//         })
//         .catch(err=>{
//             // mengembalikan nilai error pada console
//             console.log(err)
//         })
//     },

//     // module untuk edit data Role (controllerEditRole)
//     // berfungsi untuk mengedit data pada table role di database
//     controllerEditRole: async(req, res)=> {
//         // mengambil nilai parameter id
//         let {id} = req.params

//         // mengambil nilai dari inputan user/ body
//         let {name}= req.body

//         // variable berisi list untuk di post pada function update
//         let data = {
//             name : name
//         }

//         // mengedit data dengan function updare
//         await role.update(data, {
//             // mengecek parameter id yang sesuai untuk di edit
//             where: {id:id},
//         })
//         .then(result => {
//             // mengembalikan nilai dalam bentuk Json
//             res.json({
//                 data: data
//             })
//         })
//         .catch(err=>{
//             // menampilkan error pada console
//             console.log(err)
//         })
//     },

//     // module untuk delete data role pada database(controllerDeleteRole)
//     controllerDeleteRole: async(req, res)=> {

//         // mengambil parameter id dari API
//         let {id} = req.params

//         // menghapus data role dari database dengan function destroy
//         await role.destroy({
//             where: {
//                 id: id
//             }
//         })
//         .then(result => {
//             // mengembalikan nilai dalam bentuk JSON
//             res.json({
//                 message: "data was deleted successfully"
//             })
//         })
//         .catch(err=>{
//             // menampilkan error pada console
//             console.log(err)
//         })
//     }
// }

