import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/model/postgres/user.model";
import { FindConditions, Repository } from "typeorm";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findByUsernameOrEmail(usernameOrEmail: string): Promise<User | undefined> {
    return usernameOrEmail.includes('@') ? this.findByEmail(usernameOrEmail) : this.findByUsername(usernameOrEmail);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: this.createUserCriteria(username),
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async update(username: string, user: Partial<User>): Promise<void> {
    const current = await this.findByUsername(username);
    await this.userRepository.update(current.id, user);
  }

  async insert(user: User) {
    await this.userRepository.insert(user);
  }

  private createUserCriteria(username: string): Array<FindConditions<User>> {
    return [
      {
        username: username.toLowerCase(),
      },
      {
        realname: username,
      },
    ];
  }

}
