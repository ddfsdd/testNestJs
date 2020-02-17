import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1581967471548 implements MigrationInterface {
    name = 'myInit1581967471548'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD "createdBy" character varying(300)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdBy"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createDateTime"`, undefined);
    }

}
