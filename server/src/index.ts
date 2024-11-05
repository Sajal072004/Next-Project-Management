import express from 'express' 
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import projectRoutes from './routes/project-routes'
import taskRoutes from './routes/task-routes'
import searchRoutes from './routes/search-routes'
import userRoutes from './routes/user-routes'
import teamRoutes from './routes/team-routes'

// Route Imports

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get("/" , (req ,res) => {
  res.send("this is home route");
});

app.use("/projects" , projectRoutes);
app.use('/tasks' , taskRoutes);
app.use('/search' , searchRoutes);
app.use('/users' , userRoutes);
app.use('/teams', teamRoutes)

// server

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT , () => {
  console.log(`server running at port ${PORT}`);
})