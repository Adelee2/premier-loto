import { Fixture } from '@/interfaces/fixtures.interface';
import fixtureModel from '@/models/fixtures.model';
import { isEmpty } from '@utils/util';
import { Team } from '@/interfaces/teams.interface';
import teamModel from '@/models/teams.model';

class UserService {
  private fixtures = fixtureModel;
  private teams = teamModel;
  // eslint-disable-next-line prettier/prettier

  public async getFixtures(query: string): Promise<Fixture[]> {
    let fixture: Fixture[];
    if (query) {
      fixture = await this.fixtures.find({ where: { status: query } });
    }
    fixture = await this.fixtures.find();

    return fixture;
  }
  public async getTeams(): Promise<Team[]> {
    const team: Team[] = await this.teams.find();

    return team;
  }
  public async search(query: string): Promise<any> {
    const result1: Fixture[] = await this.fixtures
      .find({
        $or: [{ teamA: new RegExp(query, 'i') }, { teamB: new RegExp(query, 'i') }],
      })
      .populate([{ path: 'teams' }, { path: 'contendingtitle' }]);
    const result2: Team[] = await this.teams.find({ clubname: query });

    const result: any = { fixture: result1, team: result2 };

    return result;
  }
}

export default UserService;
