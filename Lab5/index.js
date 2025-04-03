import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    res.send(`Complete Todo ID = ${id}, Completed Status = ${completed}`);
  });
  
  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    res.send(`Describe Todo ID = ${id}, Description = ${description}`);
  });
  
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}
