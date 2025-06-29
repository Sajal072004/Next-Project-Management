"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const project_routes_1 = __importDefault(require("./routes/project-routes"));
const task_routes_1 = __importDefault(require("./routes/task-routes"));
const search_routes_1 = __importDefault(require("./routes/search-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const team_routes_1 = __importDefault(require("./routes/team-routes"));
// Route Imports
// Configurations
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)('common'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("this is home route");
});
app.use("/projects", project_routes_1.default);
app.use('/tasks', task_routes_1.default);
app.use('/search', search_routes_1.default);
app.use('/users', user_routes_1.default);
app.use('/teams', team_routes_1.default);
// server
const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});
