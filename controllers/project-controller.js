const Project = require("../schemas/Project");

const addOne = async function (name) {
  try {
    const project = new Project({ name: name });
    await project.save();
    return project;
  } catch (err) {
    return err;
  }
};

const findAll = async function () {
  try {
    const projects = await Project.find();
    return projects;
  } catch (err) {
    return err;
  }
};

const deleteOne = async function (id) {
  try {
    const result = await Project.deleteOne({ _id: id });
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = Object.freeze({
  addOne,
  findAll,
  deleteOne,
});
