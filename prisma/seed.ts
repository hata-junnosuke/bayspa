import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  // seeding
  const metadatas: Prisma.MetadataCreateInput[] = [
    {
      key: "version",
      value: "13.2.1",
    },
  ];
  for (const metadata of metadatas) {
    await prisma.metadata.create({
      data: metadata
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
