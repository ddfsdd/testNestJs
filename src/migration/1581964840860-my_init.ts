import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1581964840860 implements MigrationInterface {
    name = 'myInit1581964840860'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "createdBy" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "lastChangedBy" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "lastChangedBy" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "createdBy" SET NOT NULL`, undefined);
    }

}
