/** @format */

// src/models/index.ts

import { Candidate } from "./candidate";
import { Company } from "./companie";
import { Job } from "./job";

Company.hasMany(Job);
Job.belongsTo(Company);
Job.belongsToMany(Candidate, { through: "job_candidates" });
Candidate.belongsToMany(Job, { through: "job_candidates" });

export { Candidate, Company, Job };
