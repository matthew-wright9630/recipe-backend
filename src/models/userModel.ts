import { pool } from "../dt.js";

export const userModel = {
  async getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  },

  async getUserById(id: number) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  },
};
