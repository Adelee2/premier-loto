import { HttpException } from '@exceptions/HttpException';
import { Fixture } from '@/interfaces/fixtures.interface';
import { Team } from '@/interfaces/teams.interface';
import fixtureModel from '@/models/fixtures.model';
import teamModel from '@/models/teams.model';
import { isEmpty } from '@utils/util';
import { CreateFixtureDto } from '@/dtos/fixture.dto';
import { CreateTeamDto } from '@/dtos/teams.dto';

class AdminService {
  private fixtures = fixtureModel;
  private teams = teamModel;
  // eslint-disable-next-line prettier/prettier

  public async addTeam(teamdata: CreateTeamDto): Promise<Team> {
    const Data: Team = await this.teams.create(teamdata);

    return Data;
  }
  public async updateTeam(id: string, teamData: CreateTeamDto): Promise<Team> {
    if (isEmpty(teamData)) throw new HttpException(400, 'Body cannot be empty');

    const updateById: Team = await this.teams.findByIdAndUpdate(id, { teamData });
    if (!updateById) throw new HttpException(409, 'Not Found');

    return updateById;
  }

  public async deleteTeam(id: string): Promise<Team> {
    const deleteById: Team = await this.teams.findByIdAndDelete(id);
    if (!deleteById) throw new HttpException(409, 'Not Found');

    return deleteById;
  }

  public async addFixture(fixtureData: CreateFixtureDto): Promise<Fixture> {
    const Data: Fixture = await this.fixtures.create(fixtureData);

    return Data;
  }
  public async updateFixture(id: string, fixtureData: CreateFixtureDto): Promise<Fixture> {
    if (isEmpty(fixtureData)) throw new HttpException(400, 'Body cannot be empty');

    const updateById: Fixture = await this.fixtures.findByIdAndUpdate(id, { fixtureData });
    if (!updateById) throw new HttpException(409, 'Not Found');

    return updateById;
  }

  public async deleteFixture(id: string): Promise<Fixture> {
    const deleteById: Fixture = await this.fixtures.findByIdAndDelete(id);
    if (!deleteById) throw new HttpException(409, 'Not Found');

    return deleteById;
  }
}

export default AdminService;
