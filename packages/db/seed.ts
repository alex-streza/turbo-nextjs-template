import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
});

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "admin@acme.com",
      name: "Admin",
    },
  });
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "Hello World",
        content: "This is my first post!",
      },
      {
        title: "Second Post",
        content: "This is my second post!",
      },
    ],
  });
  console.log({ admin, posts });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
