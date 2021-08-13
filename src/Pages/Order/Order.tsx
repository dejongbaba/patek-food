import React, { useEffect, useState } from "react";
// @ts-ignore
import { BottomCta, PageTop, Section } from "../../Components/PatekUI/PatekUi";
import Footer from "../../Components/Footer/Footer";
import catFishbg from "../../assets/png/cat-fish-bg.png";
import { useParams } from "react-router";
import { verifyOrder } from "../../services/OrderService";
import { formatNumber, naira } from "../../utils/fx/fx";

type AboutType = {};

function Order(props: AboutType) {
  const { id }: any = useParams();
  const [orders, setOrders]: any = useState({});

  useEffect(() => {
    verifyOrder(id).then((res) => {
      console.log("res", res);
      setOrders(res.data);
    });
  }, [id]);
  return (
    <div>
      <PageTop
        image={catFishbg}
        description="We employ the most technologically advanced fish production equipment in the industry. "
        title="Buy healthy controlled
Catfish from Hatchery to Oven"
        linkText={"Contact us"}
        link={"/contact"}
      />
      <Section className="mt-4">
        <div className="p-2 md-p-0 md-w-40 mx-auto">
          <h3>Cart Orders Paid</h3>
          <hr />
          <p>
            This are the list of items that have been successfully paid and
            cleared from the cart.
          </p>
          <div>
            {orders?.length ? (
              <div>
                <table>
                  <thead>
                    <tr className="text-left">
                      <th>product</th>
                      <th>price</th>
                      <th>quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((p: any) => {
                      return (
                        <tr>
                          <td className="pr-1">{p.product.name}</td>
                          <td className="pr-1">
                            {naira}
                            {formatNumber(p.product.amount)}
                          </td>
                          <td className="pr-1">{p.quantity || "--"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="bg-green text-white p-1 mt-2 br-1">
                  <h1>
                    Total: {naira}
                    {formatNumber(orders?.[0]?.amount)}
                  </h1>
                  <p>Status: {orders?.[0]?.status}</p> 
                </div>
              </div>
            ) : (
              <h1 className="text-center"> No Orders on the List</h1>
            )}
          </div>
        </div>
      </Section>

      <BottomCta
        link="/contact"
        linkText="Contact Us"
        title={"Learn more about Patec Food"}
      />
      <Footer />
    </div>
  );
}

export default Order;
