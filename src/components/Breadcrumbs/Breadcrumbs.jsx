import { Wrapper, List, Item, Crumb, Current } from './Breadcrumbs.styled';

export const Breadcrumbs = ({ items }) => (
    <Wrapper aria-label="Хлібні крихти">
        <List>
            {items.map(({ label, to }) => (
                <Item key={label}>
                    {to ? (
                        <Crumb to={to}>{label}</Crumb>
                    ) : (
                        <Current aria-current="page">{label}</Current>
                    )}
                </Item>
            ))}
        </List>
    </Wrapper>
);