/** @format */

// src/controllers/candidatesController.ts

import { Candidate } from "../models";
import { Request, Response } from "express";

const candidatesController = {
	index: async (req: Request, res: Response): Promise<any> => {
		try {
			const candidates = await Candidate.findAll();
			return res.json(candidates);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},
	
    save: async (req: Request, res: Response): Promise<any> => {
		const { name, bio, email, phone, openToWork } = req.body;

		try {
			const candidate = await Candidate.create({
				name,
				bio,
				email,
				phone,
				openToWork,
			});

			return res.status(201).json(candidate);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	// GET /candidates/:id
	show: async (req: Request, res: Response): Promise<any> => {
		const { id } = req.params;

		try {
			const candidate = await Candidate.findByPk(id);

			return res.json(candidate);
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	update: async (req: Request, res: Response): Promise<any> => {
		const id = req.params.id;
		const { name, bio, email, phone, openToWork } = req.body;

		try {
			const candidate = await Candidate.findByPk(id);

			if (candidate === null) {
				return res.status(400).json({ message: "Usuario não enconntrado" });
			}

			candidate.name = name;
			candidate.bio = bio;
			candidate.email = email;
			candidate.phone = phone;
			candidate.openToWork = openToWork;

			await candidate.save();
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},

	delete: async (req: Request, res: Response): Promise<any> => {
		const id = req.params.id;

		try {
			await Candidate.destroy({ where: { id: id } });

			return res.status(204).json({ message: `User ID: "${id}" Deleted with Success` });
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
			}
		}
	},
};

export { candidatesController };
