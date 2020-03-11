import { userModel } from "../models/academia"
import { Client } from "../interfaces/users"

export const insertUser =  async (data: Client) => {
    const insertResponse = await userModel.insertMany([data])

    return insertResponse
}