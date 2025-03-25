/** @format */

// src/controllers/companiesController.ts

import { Request, Response } from "express";
import { Company } from "../models";

const companiesController = {
	index: async (req: Request, res: Response): Promise<any> => {
		try {
			const companie = await Company.findAll();
			return res.json(companie);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},
	
    save: async (req: Request, res: Response): Promise<any> => {
		const { id, name, bio, website, email } = req.body;

		try {
			const companie = await Company.create({
                id,
                name,
                bio,
                website,
                email
			});

			return res.status(201).json(companie);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	// GET /companies/:id
	show: async (req: Request, res: Response): Promise<any> => {
		const { id } = req.params;

		try {
			const companie = await Company.findByPk(id, { include: 'jobs'});

			return res.json(companie);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	update: async (req: Request, res: Response): Promise<any> => {
		const id = req.params.id;
		const { name, bio, website, email } = req.body;

		try {
			const companie = await Company.findByPk(id);

			if (companie === null) {
				return res.status(400).json({ message: "Usuario não enconntrado" });
			}

			companie.name = name;
			companie.bio = bio;
			companie.website = website;
			companie.email = email;

			await companie.save();
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	delete: async (req: Request, res: Response): Promise<any> => {
		const id = req.params.id;

		try {
			await Company.destroy({ where: { id: id } });

			return res.status(204).json({ message: `Company ID: "${id}" Deleted with Success` });
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	}
};

export { companiesController };
