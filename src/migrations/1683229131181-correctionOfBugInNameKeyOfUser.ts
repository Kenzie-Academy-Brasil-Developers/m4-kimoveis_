import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectionOfBugInNameKeyOfUser1683229131181 implements MigrationInterface {
    name = 'CorrectionOfBugInNameKeyOfUser1683229131181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createdAt" TO "createAt"`);
    }

}
