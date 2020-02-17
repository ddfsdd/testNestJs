import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1581967418179 implements MigrationInterface {
    name = 'myInit1581967418179'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createDateTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdBy"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ADD "createdBy" character varying(300)`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
    }

}
