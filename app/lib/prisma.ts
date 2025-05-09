import { PrismaClient } from '~/prisma/app/generated/prisma'
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;