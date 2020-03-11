import { userModel } from "../models/academia"

export const insertUser =  async (data: any) => {
    const insertResponse = await userModel.insertMany([data])

    return insertResponse
}