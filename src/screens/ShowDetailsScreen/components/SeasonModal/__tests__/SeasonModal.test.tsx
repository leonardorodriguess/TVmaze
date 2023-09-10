import {fireEvent, render} from '@testing-library/react-native';
import React, {createRef} from 'react';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import {act} from 'react-test-renderer';

describe('SeasonModal', () => {
  test('show all season option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={seasons => console.log(seasons)}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    // expect(getAllByText('Season', {exact: false}).length).toEqual(3);
    expect(getAllByText(/season/i).length).toEqual(3);
  });

  test('call onSelectSeacon with corret season when season was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current!.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
