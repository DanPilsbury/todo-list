const Project = require('../schemas/Project');

const addOne = async function (name){
    try {
        const project = new Project({name: name});
        await project.save();
        return todo;
    } catch(err) {
        return err;
    }
}

const findAll = async function (){
    try {
        const projects = await Project.find();
        const projectNames = projects.map(p => p.name);
        return projectNames;
    } catch(err) {
        return err;
    }
}

const deleteOne = async function (){
    try {
        console.log('delete')
    } catch(err) {
        return err;
    }
}

module.exports = Object.freeze({
    addOne,
    findAll,
    deleteOne
});
