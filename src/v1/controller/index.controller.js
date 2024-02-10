const {Pool}= require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password: 'admin',
    database:'app_520',
    port:'5432'
})

const getUsers= async(req,res)=>{
   const response=await pool.query('SELECT * FROM public.users');
   console.log(response.rows);
   res.status(200).json(response.rows);
}


const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}


const createUser = async (req, res) => {
    const {name,contact,email,password,status,role} =req.body;
    const response = await pool.query('INSERT INTO users (name,contact,email,password,status,role) VALUES ($1,$2,$3,$4,$5,$6)',[name,contact,email,password,status,role]);
    res.json({
        message:'User added successfuly',
        body:{
            user:{name,contact,email,password,status,role}
        }
    });
}


const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [id]);
    res.json(`User ${id} deleted Successfully`);
};


module.exports={
    getUsers,
    getUserById,
    createUser,
    deleteUser
}