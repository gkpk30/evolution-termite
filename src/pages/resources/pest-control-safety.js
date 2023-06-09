import React from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Header from "../../components/Header";
import Seo from "../../components/Seo";

const h1 = "Pest Control Safety.";
const text =
  "We tailor our treatments to suit the unique biology and habits of each type of pest.";

export default function pestControlSafety() {
  return (
    <main className="bg-gray-900  py-32 ">
      <Header h1={h1} text={text} />
      <div className="bg-gray-300 ">
        <div className="py-32 px-6 lg:px-8 mx-auto max-w-3xl text-base leading-7  text-indigo-950 ">
          <p className="text-base font-semibold leading-7 text-indigo-950">
            Pest Control Safety
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-950sm:text-4xl">
            Our approach to pest control involves tailoring our treatments to
            suit the unique biology and habits of each type of pest.
          </h1>
          <p className="mt-6 text-xl leading-8">
            As a team of professional pest control experts, we understand the
            importance of keeping your home and workplace pest-free. Pests not
            only pose health risks but can also damage your property, which is
            why we've put together this comprehensive guide on pest control
            safety.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-950">
              Identifying Pests
            </h2>
            <p className="mt-6">
              The first step in controlling pests is to identify them. There are
              different types of pests, including insects, rodents, and
              wildlife, and each requires a different approach to control. Some
              common pests include ants, cockroaches, termites, rats, mice,
              squirrels, and raccoons.
            </p>
            <ul  className="mt-8 max-w-xl space-y-8 text-indigo-950">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-950"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-indigo-950">
                    Data types.
                  </strong>{" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-950"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-indigo-950">
                    Loops.
                  </strong>{" "}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-950"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-indigo-950">
                    Events.
                  </strong>{" "}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-950">
              Preventing Pests
            </h2>
            <p className="mt-6">
              Prevention is key in keeping pests away from your home or
              workplace. Simple measures like keeping your premises clean and
              tidy, sealing cracks and crevices, and storing food in airtight
              containers can go a long way in deterring pests. Regular
              inspections by a professional pest control company can also help
              identify potential entry points for pests and provide preventative
              measures.
            </p>
            <figure className="mt-10 border-l border-indigo-950 pl-9">
              <blockquote className="font-semibold text-indigo-950">
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-300">
                    Maria Hill
                  </strong>{" "}
                  – Marketing Manager
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100">
              Pest Control Methods
            </h2>
            <p className="mt-6">
              When prevention methods fail, it's important to have a pest
              control plan in place. There are several methods of pest control,
              including chemical and non-chemical options. Chemical options may
              include the use of pesticides, while non-chemical options may
              include trapping, exclusion, and biological control. A
              professional pest control company can advise on the best pest
              control method for your specific situation.
            </p>
            <p className="mt-8">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
              Safety Measures
            </h2>
            <p className="mt-6">
              When dealing with pests, safety should always be a top priority.
              It's important to wear protective clothing and equipment when
              handling pesticides or setting traps. Follow the manufacturer's
              instructions carefully when using any pest control product and
              ensure that they are stored securely out of reach of children and
              pets.
            </p>
            <p className="mt-8">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
              Choosing a Pest Control Company
            </h2>
            <p className="mt-6">
              Choosing a reputable pest control company is essential in ensuring
              the safety and effectiveness of your pest control plan. Look for a
              company that is licensed and insured, and has a track record of
              successful pest control management. Read reviews and ask for
              references to ensure you choose a trustworthy pest control
              company.
            </p>
            <p className="mt-8">
              n conclusion, pest control safety is an essential part of
              maintaining a pest-free home or workplace. Identifying pests,
              preventing their entry, choosing the right pest control method,
              taking safety measures, and choosing a reputable pest control
              company are all important steps in effective pest control
              management. By following these guidelines, you can ensure a safe
              and pest-free environment for you and your loved ones.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export const Head = () => (
  <>
    <Seo title="Pest Control Safety" />
    <meta
      name="description"
      content="Pests not only pose health risks but can also damage your property, which is why we've put together this comprehensive guide on pest control safety."
    />
  </>
);
