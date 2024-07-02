import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import cors from "cors";
import BookResource from "./resources/book-resource.js";
import BlogPostResource from "./resources/blog-resouce.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const PORT = 5000;

const startAdminJS = async () => {
  const adminOptions = {
    rootPath: "/admin",
    resources: [BookResource, BlogPostResource],
  };

  const admin = new AdminJS(adminOptions);
  admin.watch();

  const adminRouter = AdminJSExpress.buildRouter(admin);

  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS server started on URL: http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

startAdminJS();
