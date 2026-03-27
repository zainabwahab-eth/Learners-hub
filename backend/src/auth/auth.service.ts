import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './login.dto';

type AuthUser = {
  id: string;
  email: string;
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    //Check existing user
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    //hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    //create user
    const user = await this.prisma.user.create({
      data: { email: dto.email, password: hashedPassword, name: dto.name },
      select: { id: true, email: true, name: true, avatar: true },
    });

    return this.signToken(user);
  }

  async login(dto: LoginDto) {
    //Check existing user
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    //if cfound compare password
    const passwordMatch = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return this.signToken(user);
  }

  signToken(user: AuthUser) {
    const payload = { sub: user.id, email: user.email };

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      access_token: this.jwtService.sign(payload),
    };
  }
}
