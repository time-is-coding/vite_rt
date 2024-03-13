import { createModel } from '@rematch/core';

// 定义 State 类型
interface ExampleState {
  name: string;
  description: string; // 注意：这里是 "description" 不是 "desscription"
  age: number;
  siderBarWidth?: number; // 假设这是你想要添加的状态属性
}
// 定义 SET_PLAYERS 的 payload 类型
interface SetPlayersPayload {
  siderBarWidth: number;
}

export const example = createModel()({
  state: {
    name: 'author',
    description: 'how to use',
    age: 80,
  },
  reducers: {
    SET_PLAYERS: (state: ExampleState, payload: SetPlayersPayload): ExampleState => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch: any) => {
    const { players } = dispatch;
    return {
      async getPlayers(): Promise<any> {
        const response = await fetch('https://www.balldontlie.io/api/v1/players');
        const { data } = await response.json();
        players.SET_PLAYERS(data);
      },
    };
  },
});
