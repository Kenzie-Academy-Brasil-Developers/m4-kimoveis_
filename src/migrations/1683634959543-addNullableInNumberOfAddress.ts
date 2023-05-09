import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNullableInNumberOfAddress1683634959543 implements MigrationInterface {
    name = 'AddNullableInNumberOfAddress1683634959543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
