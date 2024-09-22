declare interface IMomoPayment {
    screening_id: string,
    seatings: {
        id: number | undefined,
        label: string | null,
        seat_type: string
    }[],
    user_info?: {
        email: string,
        phone: string,
        name: string,
        createNewAccount: boolean
    },
    redirect_url: string
}

declare interface IOrderInfo {
    id: number;
    user_id: number | null;
    screening_id: number;
    total: number;
    status: string;
    email: string;
    phone: string;
    name: string;
    created_at: string;
    updated_at: string;
    screening: {
        id: number;
        film_id: number;
        auditorium_id: number;
        screening_time: string;
        film_translation: string;
        created_at: string;
        updated_at: string;
        auditorium: {
            id: number;
            cinema_branch_id: number;
            name: string;
            capacity: number;
            seat_direction: string;
            code: string;
            columns: number;
            rows: number;
            created_at: string;
            updated_at: string;
            cinema_branch: {
                id: number;
                name: string;
                address: string;
                latitude: number;
                longitude: number;
                region_id: number;
                cinema_company_id: number;
                code: string;
                created_at: string;
                updated_at: string;
            };
        };
        film: {
            id: number;
            release_date: string;
            duration: number;
            age_restricted: number;
            trailer: string;
            thumbnail: number;
            thumbnail_bg: number;
            title: string;
            description: string;
            code: string;
            created_at: string;
            updated_at: string;
        };
    };
    ticket_order_items: Array<{
        id: number;
        ticket_order_id: number;
        seating_arrangement_id: number;
        price: number;
        created_at: string;
        updated_at: string;
        seating_arrangement: {
            id: number;
            auditorium_id: number;
            label: string;
            seat_type: string;
            x_position: number;
            y_position: string;
            created_at: string;
            updated_at: string;
        };
    }>;
}
