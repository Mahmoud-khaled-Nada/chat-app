import {
  CloseButton,
  Container,
  Divider,
  Header,
  SettingItemContainer,
} from "../../../styled-components/settings";
import { UserProfileDetails } from "../../../utils/types";
import { AccountMenu } from "../settings/AccountMenu";
import { ChatMenu } from "../settings/ChatMenu";
import { HelpMenu } from "../settings/HelpMenu";
import { UserCardSetting } from "../settings/UserCardSetting";

type Props = {
  user: UserProfileDetails;
};

export const SettingsSidebar = ({ user }: Props) => {
  return (
    <Container>
      <Header>
        <h2>Settings</h2>
        <CloseButton>&times;</CloseButton>
      </Header>
      <UserCardSetting user={user} />
      <Divider />
      <SettingItemContainer>
        <AccountMenu />
        <Divider />
        <ChatMenu />
        <Divider />
        <HelpMenu />
      </SettingItemContainer>
    </Container>
  );
};
