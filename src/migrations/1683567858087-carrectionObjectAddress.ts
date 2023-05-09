import { MigrationInterface, QueryRunner } from "typeorm";

export class CarrectionObjectAddress1683567858087 implements MigrationInterface {
    name = 'CarrectionObjectAddress1683567858087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "street" character varying(45) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "street"`);
    }

}
